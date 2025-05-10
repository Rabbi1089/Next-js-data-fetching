const comments = [
  { id: 1, user: "Alice", text: "Great post!" },
  { id: 2, user: "Bob", text: "Very informative." },
  { id: 3, user: "Charlie", text: "Thanks for sharing!" },
  { id: 4, user: "Daisy", text: "I learned a lot." },
];

export async function PATCH(request, { params }) {
  console.log(params.id);
  const body = await request.json();
  const index = comments.findIndex((c) => c.id === parseInt(params.id));

  comments[index] = {
    text: body.text,
  };

  return Response.json({
    Message: "comments updated",
    comments,
  });
}

export async function DELETE(request, { params }) {
const newIndex = comments.findIndex((c) => c.id !== parseInt(params.id));

  return Response.json({
    Message: "Comments updated",
    comments,
  });
}
