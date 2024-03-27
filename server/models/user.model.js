import mongoose from 'mongoose'
import * as crypto from "crypto";
//const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    email: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Email is required'
    },
    seller: {
        type: Boolean, 
        default: false
    },        
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    },
    hashed_password: {
        type: String,
        required: 'hashed_password is required'
    },
    salt: String
 });

 UserSchema.virtual('password')
.set(function(password) {
    //console.log("password > set");
    //console.log(password);
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
    //console.log(this.hashed_password);
    //console.log(this.encryptPassword(password));
    //this.hashed_password = password;
})
.get(function() {
    return this._password;
});
    
UserSchema.path('hashed_password').validate(function(v) {
    console.log("hashed_password>validate");
    if (this._password && this._password.length < 6) {
        this.invalidate('password', 'Password must be at least 6 characters.');
    }
    console.log(this._password);
    if (this.isNew && !this._password) {
    //if (!this._password) {
        
        this.invalidate('password', 'Password is required3');
    }
}, null);

UserSchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },
    encryptPassword: function(password) { 
        if (!password) return ''
        try {
            return crypto.createHmac('sha1', this.salt).update(password).digest('hex'); 
        } catch (err) {
            //console.log(err);
            return '';
        }
    },
    makeSalt: function() {
        return Math.round((new Date().valueOf() * Math.random())) + ''; 
    }
}
    
//module.exports = mongoose.model('User', UserSchema);
export default mongoose.model('User', UserSchema);
