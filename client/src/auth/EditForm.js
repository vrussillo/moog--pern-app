import { Fragment, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/EditForm.css";
// import Account from "../pages/Account";

toast.configure();

const EditForm = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    email: "",
  });

  const { id } = useParams();

  const { username, password, email } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onEditForm = async (e) => {
    e.preventDefault();

    try {
      const body = { username, password, email };

      const response = await fetch(`/authentication/account/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      if (parseRes.username || parseRes.email) {
        // localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Edit Successfully", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        setAuth(false);
        toast.error(parseRes, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  let banana = id;
  const deleteUser = async (id) => {
    try {
      if (id === banana) {
        const res = await fetch(`/authentication/account/${id}`, {
          method: "DELETE",
        });
        const deleteRes = await res.json();

        if (deleteRes.id !== id) {
          localStorage.removeItem("token");
          setAuth(false);
          toast.success("Deleted Account Successfully", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="signup-div-wrap">
        <div className="SignupForm">
          <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            <h2 className="mb-3">Edit Account</h2>
            <div className="card">
              <div className="card-body">
                <form onSubmit={onEditForm}>
                  <div className="form-group">
                    <label className="form-labels">Username:</label>
                    <input
                      autoComplete="off"
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="username"
                      value={username}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  {/* <div className="form-group">
                    <label className="form-labels">Password:</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="password"
                      value={password}
                      onChange={(e) => onChange(e)}
                    />
                  </div> */}

                  <div className="form-group">
                    <label className="form-labels">Email:</label>
                    <input
                      autoComplete="off"
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                    />
                  </div>

                  {/* {formErrors.length ? (
                <Alert type="danger" messages={formErrors} />
              ) : null} */}

                  <button type="submit" className="btn-edit">
                    Submit
                  </button>
                  <Link className="btn-edit" to="/account">
                    Back
                  </Link>
                </form>

                <button
                  className="btn-edit-delete"
                  onClick={() => deleteUser(id)}
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditForm;
