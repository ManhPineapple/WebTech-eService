import passport from "passport";
import Strategy from "passport-facebook";
import config from "./fbApiConfig.json";

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  done(null, id);
});

passport.use(new Strategy({
  clientID: config.facebook_api_key,
  clientSecret:config.facebook_api_secret ,
  callbackURL: config.callback_url,
},
(accessToken, refreshToken, profile, done) => {
  process.nextTick( async() => {
    console.log(accessToken, refreshToken, profile);
    return done(null, profile);
  });
}
));

export default passport;