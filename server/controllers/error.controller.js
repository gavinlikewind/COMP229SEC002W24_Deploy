function handleError(req, res) {
    // Your code to handle the error
    }

function getErrorMessage(errMsg) {
    console.log("Error Message:" + errMsg);
}
// Export the controller function
export default {
    handleError: handleError,
    getErrorMessage:getErrorMessage
};
    
    