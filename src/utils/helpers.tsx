export const getTime = (time: number): string => {
    const timestamp = time;
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-US");
};
