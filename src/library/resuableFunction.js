export const formatDate = (dateStr) => {
    try {
        if (!dateStr) return "—";
        const d = new Date(dateStr);
        return d.toLocaleDateString("en-NG", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    } catch (error) {
        console.log("Error in formatDate : ",error)
        return "Invalid Date";
    }   
};
