import { type GetServerSideProps, type NextPage } from 'next'
import { getAuth, buildClerkProps } from "@clerk/nextjs/server";

export const getServerSideProps: GetServerSideProps = async ctx => {
  const resolvedUrl = ctx.req.url
  const { userId } = getAuth(ctx.req)
  if (!userId) {
    // handle user is not logged in.
    return {
        props: { ...buildClerkProps(ctx.req) },
        redirect: {
            destination: `/`
        }
    }
  }
  return {
    props: { ...buildClerkProps(ctx.req) }
}
}

const trash: NextPage = () => {
  return (
    <div className='h-screen text-lightA'>trash</div>
  )
}

export default trash