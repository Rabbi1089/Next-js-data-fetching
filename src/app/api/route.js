export async function GET() {
  return Response.json(comments, {
    headers: {
      "set-Cookie": "Fazla-Rabbi",
    },
  });
}

export async function POST(request) {
  const newComment = await request.json();

  comments.push({
    id: comments.length + 1,
    user: newComment.user,
  });

  return Response.json({
    message: "New comments added",
    comments,
  });
}

const comments = [
  { id: 1, user: "Alice", text: "Great post!" },
  { id: 2, user: "Bob", text: "Very informative." },
  { id: 3, user: "Charlie", text: "Thanks for sharing!" },
  { id: 4, user: "Daisy", text: "I learned a lot." },
];
