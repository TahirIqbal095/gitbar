import ContentLoader from "react-content-loader";

const RepoSkeleton = ({ times }: { times: number }) => {
    return (
        <>
            {Array.from({ length: times }).map((_, index) => (
                <ContentLoader
                    key={index}
                    speed={2}
                    width={"100%"}
                    height={"100%"}
                    viewBox="0 0 400 160"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect
                        x="65"
                        y="20"
                        rx="10"
                        ry="10"
                        width="100%"
                        height="100%"
                    />
                </ContentLoader>
            ))}
        </>
    );
};

export default RepoSkeleton;
