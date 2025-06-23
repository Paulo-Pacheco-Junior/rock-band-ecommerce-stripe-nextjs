import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Cancel() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return null;
}
