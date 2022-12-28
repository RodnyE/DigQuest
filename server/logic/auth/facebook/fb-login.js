/*************************
 *  Facebook Login File  *
 *************************/

const config = require("../../../../config.js");
const passport = require("passport");
const facebook = require("passport-facebook");
const facebookStrategy = facebook.Strategy;
const app = require(config.DIR + "/server/server.js").app;


passport.serializeUser((user, done) => {
    console.log("serialized");
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    /*User.findById(id, (err, user) => {
        done(err, user);
    });*/
    console.log("deserialize");
    done(null , {});
});

app.use(passport.initialize());
app.use(passport.session());

// Passport Strategies
passport.use(new facebookStrategy({
    clientID: config.fb.clientID,
    clientSecret: config.fb.clientSecret,
    callbackURL: config.fb.callback,
    profileFields: ['id', 'emails', 'displayName', 'picture']
}, (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => {
        console.log(profile);
        /*User.findOne({ provider_id: profile.id }, (err, user) => {
            if (err) return done(err)
            if (user) return done(null, user)
            else {
                var newUser = new User()
                newUser.provider_id = profile.id
                newUser.name = profile.displayName
                newUser.photo = profile.photos[0].value
                newUser.provider = 'facebook'

                newUser.save((err) => {
                    if (err) throw err
                    return done(null, newUser)
                })
            }
        })*/
    });
}));

module.exports = passport;
