import { useRouter } from "next/router";

function Doc() {
  const router = useRouter();
  const { params } = router.query;
  return (
    <h1>
      viewing {params[0]}
      {"   "} viewing 2 {params[1]}
    </h1>
  );
}

export default Doc;
