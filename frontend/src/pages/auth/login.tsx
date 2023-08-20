import Login from "@/components/Auth/Login";
import Layout from "@/components/Layout";

const LoginPage = () => {
  return (
    <header className="h-screen">
      <Layout>
        <Login />
      </Layout>
    </header>
  );
};

export default LoginPage;
