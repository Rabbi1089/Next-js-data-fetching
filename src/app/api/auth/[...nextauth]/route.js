import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
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

      async authorize (credentials) {
        const {email, password } = credentials;
        if (!credentials) {
          return null
        } if (email) {
          const currentUser = users.find(user => user.email === email)
          if (currentUser) {
            if (currentUser.password === password) {
              return currentUser
            }
          }
        }
      }
    }),
  ],
});

const users = [
  {
    id: 1,
    email: "a@example.com",
    name: "John Doe",
    password: "password123"
  },
  {
    id: 2,
    email: "b@example.com",
    name: "Jane Smith",
    password: "securepass456"
  },
  {
    id: 3,
    email: "mike.jones@example.com",
    name: "Mike Jones",
    password: "mikepass789"
  },
  {
    id: 4,
    email: "lisa.brown@example.com",
    name: "Lisa Brown",
    password: "lisa1234"
  }
];


export { handler as GET, handler as POST}
