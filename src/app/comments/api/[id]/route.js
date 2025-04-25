const comments = [
  { id: 1, user: "Alice", text: "Great post!" },
  { id: 2, user: "Bob", text: "Very informative." },
  { id: 3, user: "Charlie", text: "Thanks for sharing!" },
];

export async function PATCH(request, { params }) {
  const body = await request.json();
  const index = comments.findIndex((c) => c.id === parseInt(params.id));

  comments[index] = {
    text: body.text,
  };

  return Response.json({
    message: "Comments updated",
    comments,
  });
}

export async function DELETE(request, { params }) {
  const newComments = comments.filter((c) => c.id !== parseInt(params.id));
  return Response.json({
    message: "Comments Deleted",
    newComments,
  });
}
