import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github";
import UserContext from "../users/contexts";
import config from "../../config";
passport.use(
  "githubStrategy",
  new GitHubStrategy(
    {
      clientID: config.github.clientId,
      scope: ["user:email"],
      clientSecret: config.github.clientSecret,
      callbackURL: `${config.appUrl}/auth/callback/application/github/admin`,
    },
    async (accessToken, refreshToken, profile, cb) => {
      const userDetails = {
        githubId: profile.id,
        firstName: profile.displayName,
        githubURL: profile._json.url,
        email:
          profile.emails &&
          profile.emails[0] &&
          profile.emails[0].value.toLowerCase(),
        avatarURL: profile._json.avatar_url,
        accessToken,
        refreshToken,
        admin: true,
      };
      const user = await UserContext.findOrCreateVolunteerUser(userDetails);
      cb(null, user);
    }
  )
);
