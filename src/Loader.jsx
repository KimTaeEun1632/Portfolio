// loaders.js
import { db } from "./firebase";
import { collection, getDocs, orderBy, query, limit } from "firebase/firestore";

export const boardListLoader = async ({ request }) => {
  const url = new URL(request.url);
  const sortValue = url.searchParams.get("sort") || "createdAt"; // 기본값: 최신순

  const contentsQuery = query(
    collection(db, "contents"),
    orderBy(sortValue, "desc"),
    limit(25)
  );

  const querySnapshot = await getDocs(contentsQuery);
  const contents = querySnapshot.docs.map((doc) => {
    const { password, ...rest } = doc.data();
    return {
      ...rest,
      id: doc.id,
    };
  });

  return { contents, sortValue };
};
