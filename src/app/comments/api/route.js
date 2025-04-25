import { headers } from "next/headers";

export async function GET() {
  return Response.json(comments, {
    headers: {
      "Set-Cookie": "theme-dark",
    },
  });
}

export async function POST(request) {
  const newComments = await request.json();
  comments.push({
    id: comments.length + 1,
    text: newComments.text,
  });

  return Response.json({
    message: "New comment added",
    comments,
  });
}

const comments = [
  { id: 1, user: "Alice", text: "Great post!" },
  { id: 2, user: "Bob", text: "Very informative." },
  { id: 3, user: "Charlie", text: "Thanks for sharing!" },
  { id: 4, user: "Daisy", text: "I learned a lot." },
  { id: 5, user: "Ethan", text: "Nice explanation." },
  { id: 6, user: "Fiona", text: "Interesting point of view." },
  { id: 7, user: "George", text: "I totally agree." },
  { id: 8, user: "Hannah", text: "Helpful content!" },
  { id: 9, user: "Ian", text: "This is gold!" },
  { id: 10, user: "Jade", text: "Really cool insights." },
  { id: 11, user: "Kevin", text: "Clear and concise." },
  { id: 12, user: "Lena", text: "Love this." },
  { id: 13, user: "Mike", text: "Well explained." },
  { id: 14, user: "Nina", text: "Made my day!" },
  { id: 15, user: "Oscar", text: "Solid work." },
  { id: 16, user: "Pam", text: "Can't wait for more!" },
  { id: 17, user: "Quinn", text: "Easy to understand." },
  { id: 18, user: "Rita", text: "Keep it up!" },
  { id: 19, user: "Sam", text: "Very helpful post." },
  { id: 20, user: "Tina", text: "Appreciate this!" },
];
