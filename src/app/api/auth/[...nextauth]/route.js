import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  secret: process.env.NEXT_PUBLIC_Auth_Secrte,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },

  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "text",
          required: true,
          placeholder: "Your Email",
        },
        name: {
          label: "Name",
          type: "text",
          required: true,
          placeholder: "Your Name",
        },
        password: {
          label: "password",
          type: "password",
          required: true,
          placeholder: "Your Password",
        },
      },

      async authorize(credentials) {
        const { email, password } = credentials;
        if (!credentials) {
          return null;
        }
        if (email) {
          const currentUser = users.find((user) => user.email === email);
          if (currentUser) {
            if (currentUser.password === password) {
              return currentUser;
            }
          }
        }
      },
    }), GoogleProvider({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
  })
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      if (account) {
        token.type = user.type;
      }

      return token;
    },
    async session({ session, user, token }) {
      session.user.type = token.type;
      return session;
    },
  },
};
const handler = NextAuth(authOptions);

const users = [
  {
    id: 1,
    email: "a@example.com",
    name: "Fazla Rabbi",
    password: " ",
    type: "admin",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    email: "b@example.com",
    name: "Jane Smith",
    password: "securepass456",
    type: "admin",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    email: "mike.jones@example.com",
    name: "Mike Jones",
    password: "mikepass789",
    type: "user",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    email: "lisa.brown@example.com",
    name: "lisa",
    password: "1234",
    type: "user",
    image: "https://picsum.photos/200/300",
  },
];

//https://picsum.photos need to add in next config
export { handler as GET, handler as POST };
