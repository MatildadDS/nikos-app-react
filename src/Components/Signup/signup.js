import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import UserService from '../../Services/UserService'
import Background from '../../Assets/images/about-bg.jpg'
import './signup.scss'

function RegistrationForm(props) {

    const validationSchema = Yup.object().shape({
        firstname: Yup.string()
          .required('Firstname is required')
          .min(2, 'Firstname must be at least 2 characters')
          .max(20, 'Firstname must not exceed 20 characters'),
        lastname: Yup.string()
          .required('Lastname is required')
          .min(2, 'Lastname must be at least 2 characters')
          .max(20, 'Lastname must not exceed 20 characters'),
        city: Yup.string()
          .required('City is required')
          .min(2, 'City must be at least 2 characters')
          .max(20, 'City must not exceed 20 characters'),
        country: Yup.string()
          .required('Country is required')
          .min(2, 'Country must be at least 2 characters')
          .max(20, 'Country must not exceed 20 characters'),
        phone: Yup.string()
          .required('Phone number is required')
          .min(8, 'Phone number must be at least 8 characters')
          .max(40, 'Phone number must not exceed 40 characters'),
        email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
        password: Yup.string()
          .required('Password is required')
          .min(8, 'Password must be at least 8 characters')
          .max(40, 'Password must not exceed 40 characters'),
        confirmPassword: Yup.string()
          .required('Confirm Password is required')
          .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
        acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
      });

      const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm({
        resolver: yupResolver(validationSchema)
      });

      const onSubmit =  async (data, e) => {
        await UserService.signup(data);
        console.log(props)
        props.history.push("/login")
        console.log(JSON.stringify(data, e));
        reset();
      };

      const onError = (errors, e) => console.log(errors, e);

    return (
        <div className="registerform_container">
            <div className="home_background">
              <img className="background_img" src={Background} alt="background"/>
            </div>

          <form class="myForm" method="post" onSubmit={handleSubmit(onSubmit, onError)}>
          <h1 className="registerform_title">Sign Up</h1>

            <div className="form-group">
              <label>Fistname</label>
              <input
                name="firstname"
                type="text"
                {...register('firstname')}
                className={`form-control ${errors.firstname ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.firstname?.message}</div>
            </div>

            <div className="form-group">
              <label>Lastname</label>
              <input
                name="lastname"
                type="text"
                {...register('lastname')}
                className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.lastname?.message}</div>
            </div>

            <div className="form-group">
              <label>City</label>
              <input
                name="city"
                type="text"
                {...register('city')}
                className={`form-control ${errors.city ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.city?.message}</div>
            </div>

            <div className="form-group">
              <label>Country</label>
              <input
                name="country"
                type="text"
                {...register('country')}
                className={`form-control ${errors.country ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.country?.message}</div>
            </div>

            <div className="form-group">
              <label>Phone number</label>
              <input
                name="phone"
                type="text"
                {...register('phone')}
                className={`form-control ${errors.phonenumber ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.phonenumber?.message}</div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                type="email"
                {...register('email')}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                name="password"
                type="password"
                {...register('password')}
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                name="confirmPassword"
                type="password"
                {...register('confirmPassword')}
                className={`form-control ${
                  errors.confirmPassword ? 'is-invalid' : ''
                }`}
              />
              <div className="invalid-feedback">
                {errors.confirmPassword?.message}
              </div>
            </div>

            {/* <div className="form-group form-check">
              <input
                name="acceptTerms"
                type="checkbox"
                {...register('acceptTerms')}
                className={`form-check-input ${
                  errors.acceptTerms ? 'is-invalid' : ''
                }`}
              />
              <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
            </div> */}

            <Link to="/login" variant="body2">
                  {"Already have an account? Login"}
            </Link>

            <div className="form-group">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
    </div>
    )
}

export default RegistrationForm
