// Tutaj zaimplementuj akcje

const DEPLOYED = "DEPLOYED";

const deploy = () => (dispatch) => {

    const newInt = setInterval(() => {dispatch(deployRocket())}, 1000)
}

const deployRocket = (payload) => ({
    type: DEPLOYED,
    payload: payload
});

export { deploy, DEPLOYED };
