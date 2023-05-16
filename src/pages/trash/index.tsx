import { type GetServerSideProps, type NextPage } from 'next'
import { getAuth, buildClerkProps } from "@clerk/nextjs/server";
import Shell from '@/components/Shell';

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
    <Shell path="/trash">
      Trash
    </Shell>
  )
}

export default trash