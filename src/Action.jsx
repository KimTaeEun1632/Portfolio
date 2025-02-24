// import { db } from "./firebase";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// export const addPostAction = async ({ request }) => {
//   const formData = await request.formData();
//   const newPost = {
//     title: formData.get("title"),
//     content: formData.get("content"),
//     nickname: formData.get("nickname"),
//     rating: Number(formData.get("rating")) || 0,
//     replyCount: 0,
//     createdAt: serverTimestamp(),
//   };

//   await addDoc(collection(db, "contents"), newPost);
//   return null;
// };
