export class User {
    constructor({ email = null, password = null, name = null, childName = null, bio = null, location = null, favoriteActivities = null, token = null}) {
        this.email = email
        this.password = password
        this.name = name
        this.childName = childName
        this.bio = bio
        this.location = location
        this.favoriteActivities = favoriteActivities
        this.token = token
    }

    get editableJson() {
        return JSON.stringify({
            "name": this.name,
            "child_name": this.childName,
            "bio": this.bio,
            "location": this.location,
            "favorite_activities": this.favoriteActivities
        })
    }
    get authJson() {
        return JSON.stringify({
            "email": this.email,
            "password": this.password
        })
    }
    get json() {
        return JSON.stringify({
            "email": this.email,
            "password": this.password,
            "name": this.name,
            "child_name": this.childName,
            "bio": this.bio,
            "location": this.location,
            "favorite_activities": this.favoriteActivities
        })
    }
}

export class App {
    static baseUrl = "https://myspecialbuddies.onrender.com"
    static signUpPath = "/signup/user"
    static loginPath = "/login/user"
    static editUserPath = "/user"
    static rememberMeDuration = 30
    static tokenCookieName = "jwt_token"

    static user = null//new User({ email: "asdf", password: "asdf", name: "asdf", childName: "asdf", bio: "asdf", location: "asdf", favoriteActivities: "asdf", token: "asdf"})//null

    static deleteCookie( name) {
        if( this.getCookie(name) ) {
          document.cookie = name + "=;path=/" + ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
        }
    }      
    static getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return false;
    }
    static setCookie(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + (days*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }
    static async post(path, body) {
        var res
        return new Promise((resolve, reject) => {
            fetch(path, {
                method: "POST",
                body: body,
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
            })          
            .then((response) => {
                res = response
                return response.json()
            })
            .then((json) => 
                resolve({body: json, response: res})
            )
            .catch((error) => {
                reject(error)
            })
        })          
    }
    static async patch(path, body, token) {
        var res
        return new Promise((resolve, reject) => {
            fetch(path, {
                method: "PATCH",
                body: body,
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-type": "application/json; charset=UTF-8"
                }
            })          
            .then((response) => {
                res = response
                return response.json()
            })
            .then((json) => 
                resolve({body: json, response: res})
            )
            .catch((error) => {
                reject(error)
            })
        })          
    }
    static async delete(path, token) {
        var res
        return new Promise((resolve, reject) => {
            fetch(path, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-type": "application/json; charset=UTF-8"
                }
            })          
            .then((response) => {
                res = response
                return response.json()
            })
            .then((json) => 
                resolve({body: json, response: res})
            )
            .catch((error) => {
                reject(error)
            })
        })          
    }
    static logout() {
        this.deleteCookie(App.tokenCookieName)
    }
    static async login(user, remember) {
        try {
            let {body, response} = await this.post(App.baseUrl + App.loginPath, user.authJson)
            if(!response.ok) {
                throw "Unable to authenticate user"
            }
            if(remember) {
                this.setCookie(App.tokenCookieName, body.token, App.rememberMeDuration)
            }
            console.log(body)
            this.user = new User({
                email: body.user.email,
                password: body.user.password,
                childName: body.user.child_name,
                bio: body.user.bio,
                location: body.user.location,
                name: body.user.name,
                favoriteActivities: body.user.favorite_activities,
                token: body.token
            })
        } catch (error) {
            throw error
        }
    }
    static async signUp(user) {
        try {
            let {body, response} = await this.post(App.baseUrl + App.signUpPath, user.json)
            console.log(response)
            if(!response.ok) {
                throw "Unable to create account"
            }
        } catch (error) {
            throw error
        }
    }
    static async updateUser(newUser) {
        let token = this.user.token
        if(token == null) throw "Permission denied"
        try {
            let {body, response} = await this.patch(App.baseUrl + App.editUserPath, newUser.editableJson, token)
            this.user.childName = body.child_name
            this.user.bio = body.bio
            this.user.location = body.location
            this.user.name = body.name
            this.user.favoriteActivities = body.favorite_activities

            if(!response.ok) {
                throw "Unable to save changes"
            }
        } catch (error) {
            throw error
        }
    }
    static async deleteUser() {
        let token = this.user.token
        if(token == null) throw "Permission denied"
        try {
            let { response} = await this.delete(App.baseUrl + App.editUserPath, token)

            if(!response.ok) {
                throw "Unable to delete profile"
            }
        } catch (error) {
            throw error
        }
    }
}