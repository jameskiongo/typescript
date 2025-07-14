import passport from "passport";
import passportGoogle from "passport-google-oauth20";
import "dotenv/config";
const GoogleStrategy = passportGoogle.Strategy;

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			callbackURL: "/google/redirect/",
		},
		(accessToken, refreshToken, profile, done) => {
			// get profile details
			// save profile details in db
			console.log(accessToken, refreshToken, profile, done);
		},
	),
);
