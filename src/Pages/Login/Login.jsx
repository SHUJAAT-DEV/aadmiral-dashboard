import React, {useState, useEffect} from "react";
import styles from "./login.module.scss";
import Logo from "../../Assets/Group 942.svg";
import {Container, Col, Row, CardBody, Button, Card, Alert} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../Components/Loader/Loader";
import {useHistory} from "react-router-dom";
import {login, clearMessages} from "../../redux/login/actions";
import axios from "axios";
import {URL} from "../../config/serverUrl";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_MESSAGE,
} from "../../redux/login/types";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const {data, loading, error} = userLogin;
  const [state, setState] = useState({
    email: false,
    password: false,
  });
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errors, setError] = useState("");

  const onFocusHandler = (event) => {
    setError("");
    setState({...state, [event.target.name]: true});
  };
  const onBlurHandler = (event) => {
    setError("");

    setState({...state, [event.target.name]: false});
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const user = {email, password};
    if (email && password) {
      if (email === "admin@aadmirals.com") {
        dispatch(login(user, history));
      } else {
        axios.post(`${URL}/admin/stafflogin`, {email, password}).then((res) => {
          if (res.data.success == true) {
            localStorage.setItem("token", res.data.accessToken);
            localStorage.setItem("dataId", res.data.userData._id);
            localStorage.setItem("role", res.data.userData.role);

            dispatch({type: LOGIN_SUCCESS, payload: res.data.userData});
            history.push("/");
          }
        });
      }
    } else {
      setError("All fields required!");
    }
  };

  return (
    <Container className={`${styles.main_container}`}>
      <Row className={styles.setrow}>
        <Col xs={12} md={12} className={`${styles.background} p-0`}>
          <div className={styles.container_left}>
            <Container>
              <Card className={`${styles.cardPayment} mt-5 mb-4 `}>
                <CardBody className=" pt-0">
                  <div className={styles.logoImage}>
                    <img src={Logo} alt="logo" width="100%" />
                  </div>
                  <p className={styles.head}>Login</p>
                  <p className={styles.texthead}>
                    Login here to get all access of Admirals admin panel
                  </p>
                  {errors ? <Alert color="danger">{errors}</Alert> : null}
                  {error ? (
                    <Alert
                      color="danger"
                      toggle={() => dispatch(clearMessages())}>
                      {error.response.data.message}
                    </Alert>
                  ) : null}
                  <div
                    className={`${
                      state.email ? styles.inputBoxwhite1 : styles.inputBoxwhite
                    }`}
                    style={{marginBottom: "20px"}}>
                    <label for="Email">Email</label>

                    <div className={styles.input}>
                      <input
                        type="email"
                        name="email"
                        placeholder="John Doe"
                        onBlur={onBlurHandler}
                        onFocus={onFocusHandler}
                        value={email}
                        onChange={(e) => {
                          dispatch(clearMessages());
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className={`${
                      state.password
                        ? styles.inputBoxwhite1
                        : styles.inputBoxwhite
                    }`}
                    style={{marginBottom: "20px"}}>
                    <label for="Password">Password</label>

                    <div className={styles.input}>
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onBlur={onBlurHandler}
                        onFocus={onFocusHandler}
                        value={password}
                        onChange={(e) => {
                          dispatch(clearMessages());
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <Row>
                    <Col xs="12" className={`mb-3`}>
                      <Button
                        onClick={submitHandler}
                        className={styles.buttonPayment}>
                        {loading ? "Loading" : "Login"}
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
