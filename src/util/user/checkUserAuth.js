const checkUserAuth = (app, user) => {
    if(app.state.components.input.allowedUser === user.roles){
        app.setState({
            components: {
                input: {
                    show: false,
                }
            }
        });
    } else{
        app.setState({
            components: {
                input: {
                    show: false,
                }
            }
        })
    }
    console.log(user);
    console.log(app.state);
}

export {
    checkUserAuth
}