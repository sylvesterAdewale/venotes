import Shell from "@/components/Shell";
import { getAuth, buildClerkProps } from "@clerk/nextjs/server";
import type { GetServerSideProps, NextPage } from 'next'

const index: NextPage = () => {
  return (
    <Shell path="/recent">
      Recent
    </Shell>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const resolvedUrl = ctx.req.url
    const { userId } = getAuth(ctx.req)
    if (!userId) {
      // handle user is not logged in.
      return {
          props: {},
          redirect: {
              destination: `/`
          }
      }
    }
    return {
      props: { ...buildClerkProps(ctx.req) }
  }
  }

export default index