/*************************
 *  Facebook Login File  *
 *************************/

const config = require("../../../../config.js");
const User = require(config.LOGIC + "/database/dbh.js").User;
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const app = require(config.DIR + "/server/server.js").app;
const expressSession = require('express-session');

app.use(expressSession({
    secret: config.SESSION.secret,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(function(user, done) {
    console.log('serializing user: ', user);
    done(null, user._id);
});

passport.deserializeUser(async function(id, done) {
    const user = await User.findOne({
        where: {
            user_id: id,
        }
    });

    if (user) {
        console.log('deserializing user:', user);
        done(null, user);
        return;
    }
    done("err");
});

passport.use('login', new LocalStrategy({
        passReqToCallback: true
    },
    async function(req, username, password, done) {
        const user = await User.findOne({
            where: {
                username: username
            }
        });
        if (!user) {
            console.log('User Not Found with username ' + username);
            return done(null, false,
                req.flash('message', 'User Not found.'));
        }

        if (user.password != password) {
            console.log('Invalid Password');
            return done(null, false,
                req.flash('message', 'Invalid Password'));
        }
        return done(null, user);
    }
));

passport.use('signup', new LocalStrategy({
        passReqToCallback: true
    },
    function(req, username, password, done) {
        findOrCreateUser = async function() {
            const user = await User.findOne({
                where: {
                    username: username
                }
            });
            // already exists 
            if (user) {
                console.log('User already exists');
                return done(null, false,
                    req.flash('message', 'User Already Exists'));
            } else {
                let newUser = {};
                newUser.username = username;
                newUser.password = password;
                newUser.email = req.param('email');
                
                const reg = await User.create(newUser);

                if (reg) {

                    console.log('User Registration succesful');
                    return done(null, newUser);
                }else {
                    console.log("Error");
                    return done(null , false);
                }
            }
        };

        process.nextTick(findOrCreateUser);
    }
));


module.exports = passport;