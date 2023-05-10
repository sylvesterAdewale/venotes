import { UserButton } from "@clerk/nextjs";
import { getAuth, buildClerkProps } from "@clerk/nextjs/server";
import { GetServerSideProps, type NextPage } from 'next'

export const getServerSideProps: GetServerSideProps = async ctx => {

  const { userId } = getAuth(ctx.req)
  if (!userId) {
    // handle user is not logged in.
    return {
        props: { ...buildClerkProps(ctx.req) },
        redirect: {
            destination: `?next=`
        }
    }
  }
  return {
    props: { ...buildClerkProps(ctx.req) }
}
}

const index: NextPage = () => {
  return (
    <div className="text-lightA h-screen p-5 max-w-5xl mx-auto">
        <UserButton />
    </div>
  )
}

export default index