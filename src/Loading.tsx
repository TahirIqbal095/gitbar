import ContentLoader from "react-content-loader";

const MyLoader = () => (
    <ContentLoader
        speed={2}
        width={"100%"}
        height={"100%"}
        viewBox="0 0 400 320"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className="w-full"
    >
        <rect x="98" y="8" rx="3" ry="3" width="88" height="6" />
        <rect x="98" y="26" rx="3" ry="3" width="52" height="6" />
        <rect x="98" y="40" rx="3" ry="3" width="30" height="6" />
        <rect x="0" y="96" rx="10" ry="10" width="100%" height="100%" />
        <circle cx="40" cy="40" r="40" />
    </ContentLoader>
);

export default MyLoader;
