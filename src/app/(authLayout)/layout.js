import Footer from "@/components/shared/Footer";

const AuthLayout = ({children}) => {
    return (
        <div>
            {children}
            <Footer/>
        </div>
    );
};

export default AuthLayout;