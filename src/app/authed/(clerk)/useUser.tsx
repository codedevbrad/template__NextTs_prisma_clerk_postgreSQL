"use client";
import { useUser } from "@clerk/nextjs";
 
export default function UserData() {
  const { isLoaded, isSignedIn, user } = useUser();
 
  if (!isLoaded || !isSignedIn) {
    return null;
  }
 
  return <div>Hello, {user.firstName} welcome to Clerk</div>;
}