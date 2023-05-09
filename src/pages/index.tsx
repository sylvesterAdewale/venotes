import { type GetServerSideProps, type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { api } from "@/utils/api";
import { SignIn } from "@clerk/nextjs";
import { getAuth, buildClerkProps } from "@clerk/nextjs/server";

export const getServerSideProps: GetServerSideProps = async ctx => {
  let next = ctx.query.next || 'recent';
  const { userId } = getAuth(ctx.req)
  
  if (userId) {
    return {
      props: { ...buildClerkProps(ctx.req) },
      redirect: {
          destination: `/${next}`
      }
    }
  }


  return { 
    props: { ...buildClerkProps(ctx.req) },
}
}

const Home: NextPage = () => {

  return (
    <div className="h-screen flex flex-col items-center justify-center text-lightA">
      <SignIn />
    </div>
  );
};

export default Home;
