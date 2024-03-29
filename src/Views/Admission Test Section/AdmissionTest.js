import React from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Link, useHistory } from "react-router-dom";

function AdmissionTest() {

    /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  const history = useHistory()
  
  const onSubmitHandler = (data) => {
    history.push({
      pathname:"/placement-questions",
      state: data
    })
  }
    //1 Start of by making initial values 


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            dob:'',
            gender:'',
            country:'',
            country_code:'',
            phone:'',
            password:'',
            conf_pass:'',
            ageGroup:''

        },

        //4 Make onSubmit propert to handle what happens to data on form submisison

        onSubmit: values => {

          
          //createTodo(formik.values)
          //redirecting 
          //history.push("/")

          onSubmitHandler(formik.values)

        },

        //5 Make validation property

        validate: values => {
            
            let errors = {}

            const letters = /^[A-Za-z ]+$/;

            const cnic = /^[0-9--]+$/;

            const phone = /^[0-9]+$/;

            const symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
            
            if(!values.name){
                errors.name = "Please enter your Name"
            }else if (!letters.test(values.name)) {
                errors.name = "Please enter a valid Name"
            }

          if(!values.phone){
              errors.phone = "Please enter your contact number"
          }else if (!phone.test(values.phone)) {
              errors.phone = "Please enter a valid contact number"
          }

            if(values.conf_pass != values.password){
                errors.conf_pass = "Your password does not match"
            }

            if(!values.email){
                errors.email = "Please enter your Email"
            }

            if(!values.gender){
                errors.gender = "Please fill select your Gender, select 'Unspecify' if you do not wish to specify"
            }else if (values.gender == "Choose Gender"){
                errors.gender = "Please fill select your Gender, select 'Unspecify' if you do not wish to specify"

            }

            if(!values.country){
                errors.country = "Please select your Country"
            }else if (values.country == "Choose Country"){
                errors.country = "Please select your Country"

            }
            if(!values.ageGroup){
              errors.ageGroup = "Please select your Age Group"
            }else if (values.ageGroup == "Choose Age Group"){
              errors.ageGroup = "Please select your Age Group"
            }
            
            if(!values.country_code){
              errors.country_code = "Please select your Country Code"
            }else if (values.country_code == "Choose Country Code"){
              errors.country_code = "Please select your Country Code"
            }
            return errors


        }


    })

    console.log("Form errors", formik.errors)
    return (
        <div>
           

      <section className="s-space-equal">
        <div className="container">
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-6 col-xs-6"/>
            <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
              <div className="login-registration-field">
                <h2 className="cart-area-title pt-3" style={{textAlign: 'center'}}>Registration For Placement Test</h2>
                <hr/>
                <div id="loader" style={{display: 'none'}}>
                  <img src="{{asset('assets/loader/tenor.gif')}}" width="100px" height="100px" />
                </div>

               {/* @if($message=Session::get('error')) 
                <div className="alert alert-danger alert-block">
                  <button type="button" className="close" data-dismiss="alert">×</button>
                  <strong> {'{'}{'{'} $message{'}'}{'}'}</strong>
                </div>
                @endif
    */}
                <form onSubmit={formik.handleSubmit}>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                        <label htmlFor>Full Name</label>
                            {/*2 put onChange = {formkit.handleChange} value={formik.values.name} in all the form fields with their corroposind name  in values */}
                             <input type="text" placeholder="Your Full Name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} className="form-control" required  />
                            {formik.errors.name && formik.touched.name ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.name}</div>) : null}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="rating_from">Email Address</label>
                          <input type="email" placeholder="Your Email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className="form-control" required  />
                          {formik.touched.email ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.email}</div>) : null}
                        </div>
                      </div>
                      <div className="col-sm-6">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor>Country Code</label>
                                            <select name="country_code" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.country_code} className="form-control" placeholder="Choose Country Code" required>
                                            <option>Choose Country Code</option>
                                                            <option data-countryCode="DZ" value="+213">Algeria (+213)</option>
                                                            <option data-countryCode="AD" value="+376">Andorra (+376)</option>
                                                            <option data-countryCode="AO" value="+244">Angola (+244)</option>
                                                            <option data-countryCode="AI" value="+1264">Anguilla (+1264)</option>
                                                            <option data-countryCode="AG" value="+1268">Antigua &amp; Barbuda (+1268)</option>
                                                            <option data-countryCode="AR" value="+54">Argentina (+54)</option>
                                                            <option data-countryCode="AM" value="+374">Armenia (+374)</option>
                                                            <option data-countryCode="AW" value="+297">Aruba (+297)</option>
                                                            <option data-countryCode="AU" value="+61">Australia (+61)</option>
                                                            <option data-countryCode="AT" value="+43">Austria (+43)</option>
                                                            <option data-countryCode="AZ" value="+994">Azerbaijan (+994)</option>
                                                            <option data-countryCode="BS" value="+1242">Bahamas (+1242)</option>
                                                            <option data-countryCode="BH" value="+973">Bahrain (+973)</option>
                                                            <option data-countryCode="BD" value="+880">Bangladesh (+880)</option>
                                                            <option data-countryCode="BB" value="+1246">Barbados (+1246)</option>
                                                            <option data-countryCode="BY" value="+375">Belarus (+375)</option>
                                                            <option data-countryCode="BE" value="+32">Belgium (+32)</option>
                                                            <option data-countryCode="BZ" value="+501">Belize (+501)</option>
                                                            <option data-countryCode="BJ" value="+229">Benin (+229)</option>
                                                            <option data-countryCode="BM" value="+1441">Bermuda (+1441)</option>
                                                            <option data-countryCode="BT" value="+975">Bhutan (+975)</option>
                                                            <option data-countryCode="BO" value="+591">Bolivia (+591)</option>
                                                            <option data-countryCode="BA" value="+387">Bosnia Herzegovina (+387)</option>
                                                            <option data-countryCode="BW" value="+267">Botswana (+267)</option>
                                                            <option data-countryCode="BR" value="+55">Brazil (+55)</option>
                                                            <option data-countryCode="BN" value="+673">Brunei (+673)</option>
                                                            <option data-countryCode="BG" value="+359">Bulgaria (+359)</option>
                                                            <option data-countryCode="BF" value="+226">Burkina Faso (+226)</option>
                                                            <option data-countryCode="BI" value="+257">Burundi (+257)</option>
                                                            <option data-countryCode="KH" value="+855">Cambodia (+855)</option>
                                                            <option data-countryCode="CM" value="+237">Cameroon (+237)</option>
                                                            <option data-countryCode="CA" value="+1">Canada (+1)</option>
                                                            <option data-countryCode="CV" value="+238">Cape Verde Islands (+238)</option>
                                                            <option data-countryCode="KY" value="+1345">Cayman Islands (+1345)</option>
                                                            <option data-countryCode="CF" value="+236">Central African Republic (+236)</option>
                                                            <option data-countryCode="CL" value="+56">Chile (+56)</option>
                                                            <option data-countryCode="CN" value="+86">China (+86)</option>
                                                            <option data-countryCode="CO" value="+57">Colombia (+57)</option>
                                                            <option data-countryCode="KM" value="+269">Comoros (+269)</option>
                                                            <option data-countryCode="CG" value="+242">Congo (+242)</option>
                                                            <option data-countryCode="CK" value="+682">Cook Islands (+682)</option>
                                                            <option data-countryCode="CR" value="+506">Costa Rica (+506)</option>
                                                            <option data-countryCode="HR" value="+385">Croatia (+385)</option>
                                                            <option data-countryCode="CU" value="+53">Cuba (+53)</option>
                                                            <option data-countryCode="CY" value="+90392">Cyprus North (+90392)</option>
                                                            <option data-countryCode="CY" value="+357">Cyprus South (+357)</option>
                                                            <option data-countryCode="CZ" value="+42">Czech Republic (+42)</option>
                                                            <option data-countryCode="DK" value="+45">Denmark (+45)</option>
                                                            <option data-countryCode="DJ" value="+253">Djibouti (+253)</option>
                                                            <option data-countryCode="DM" value="+1809">Dominica (+1809)</option>
                                                            <option data-countryCode="DO" value="+1809">Dominican Republic (+1809)</option>
                                                            <option data-countryCode="EC" value="+593">Ecuador (+593)</option>
                                                            <option data-countryCode="EG" value="+20">Egypt (+20)</option>
                                                            <option data-countryCode="SV" value="+503">El Salvador (+503)</option>
                                                            <option data-countryCode="GQ" value="+240">Equatorial Guinea (+240)</option>
                                                            <option data-countryCode="ER" value="+291">Eritrea (+291)</option>
                                                            <option data-countryCode="EE" value="+372">Estonia (+372)</option>
                                                            <option data-countryCode="ET" value="+251">Ethiopia (+251)</option>
                                                            <option data-countryCode="FK" value="+500">Falkland Islands (+500)</option>
                                                            <option data-countryCode="FO" value="+298">Faroe Islands (+298)</option>
                                                            <option data-countryCode="FJ" value="+679">Fiji (+679)</option>
                                                            <option data-countryCode="FI" value="+358">Finland (+358)</option>
                                                            <option data-countryCode="FR" value="+33">France (+33)</option>
                                                            <option data-countryCode="GF" value="+594">French Guiana (+594)</option>
                                                            <option data-countryCode="PF" value="+689">French Polynesia (+689)</option>
                                                            <option data-countryCode="GA" value="+241">Gabon (+241)</option>
                                                            <option data-countryCode="GM" value="+220">Gambia (+220)</option>
                                                            <option data-countryCode="GE" value="+7880">Georgia (+7880)</option>
                                                            <option data-countryCode="DE" value="+49">Germany (+49)</option>
                                                            <option data-countryCode="GH" value="+233">Ghana (+233)</option>
                                                            <option data-countryCode="GI" value="+350">Gibraltar (+350)</option>
                                                            <option data-countryCode="GR" value="+30">Greece (+30)</option>
                                                            <option data-countryCode="GL" value="+299">Greenland (+299)</option>
                                                            <option data-countryCode="GD" value="+1473">Grenada (+1473)</option>
                                                            <option data-countryCode="GP" value="+590">Guadeloupe (+590)</option>
                                                            <option data-countryCode="GU" value="+671">Guam (+671)</option>
                                                            <option data-countryCode="GT" value="+502">Guatemala (+502)</option>
                                                            <option data-countryCode="GN" value="+224">Guinea (+224)</option>
                                                            <option data-countryCode="GW" value="+245">Guinea - Bissau (+245)</option>
                                                            <option data-countryCode="GY" value="+592">Guyana (+592)</option>
                                                            <option data-countryCode="HT" value="+509">Haiti (+509)</option>
                                                            <option data-countryCode="HN" value="+504">Honduras (+504)</option>
                                                            <option data-countryCode="HK" value="+852">Hong Kong (+852)</option>
                                                            <option data-countryCode="HU" value="+36">Hungary (+36)</option>
                                                            <option data-countryCode="IS" value="+354">Iceland (+354)</option>
                                                            <option data-countryCode="IN" value="+91">India (+91)</option>
                                                            <option data-countryCode="ID" value="+62">Indonesia (+62)</option>
                                                            <option data-countryCode="IR" value="+98">Iran (+98)</option>
                                                            <option data-countryCode="IQ" value="+964">Iraq (+964)</option>
                                                            <option data-countryCode="IE" value="+353">Ireland (+353)</option>
                                                            <option data-countryCode="IL" value="+972">Israel (+972)</option>
                                                            <option data-countryCode="IT" value="+39">Italy (+39)</option>
                                                            <option data-countryCode="JM" value="+1876">Jamaica (+1876)</option>
                                                            <option data-countryCode="JP" value="+81">Japan (+81)</option>
                                                            <option data-countryCode="JO" value="+962">Jordan (+962)</option>
                                                            <option data-countryCode="KZ" value="+7">Kazakhstan (+7)</option>
                                                            <option data-countryCode="KE" value="+254">Kenya (+254)</option>
                                                            <option data-countryCode="KI" value="+686">Kiribati (+686)</option>
                                                            <option data-countryCode="KP" value="+850">Korea North (+850)</option>
                                                            <option data-countryCode="KR" value="+82">Korea South (+82)</option>
                                                            <option data-countryCode="KW" value="+965">Kuwait (+965)</option>
                                                            <option data-countryCode="KG" value="+996">Kyrgyzstan (+996)</option>
                                                            <option data-countryCode="LA" value="+856">Laos (+856)</option>
                                                            <option data-countryCode="LV" value="+371">Latvia (+371)</option>
                                                            <option data-countryCode="LB" value="+961">Lebanon (+961)</option>
                                                            <option data-countryCode="LS" value="+266">Lesotho (+266)</option>
                                                            <option data-countryCode="LR" value="+231">Liberia (+231)</option>
                                                            <option data-countryCode="LY" value="+218">Libya (+218)</option>
                                                            <option data-countryCode="LI" value="+417">Liechtenstein (+417)</option>
                                                            <option data-countryCode="LT" value="+370">Lithuania (+370)</option>
                                                            <option data-countryCode="LU" value="+352">Luxembourg (+352)</option>
                                                            <option data-countryCode="MO" value="+853">Macao (+853)</option>
                                                            <option data-countryCode="MK" value="+389">Macedonia (+389)</option>
                                                            <option data-countryCode="MG" value="+261">Madagascar (+261)</option>
                                                            <option data-countryCode="MW" value="+265">Malawi (+265)</option>
                                                            <option data-countryCode="MY" value="+60">Malaysia (+60)</option>
                                                            <option data-countryCode="MV" value="+960">Maldives (+960)</option>
                                                            <option data-countryCode="ML" value="+223">Mali (+223)</option>
                                                            <option data-countryCode="MT" value="+356">Malta (+356)</option>
                                                            <option data-countryCode="MH" value="+692">Marshall Islands (+692)</option>
                                                            <option data-countryCode="MQ" value="+596">Martinique (+596)</option>
                                                            <option data-countryCode="MR" value="+222">Mauritania (+222)</option>
                                                            <option data-countryCode="YT" value="+269">Mayotte (+269)</option>
                                                            <option data-countryCode="MX" value="+52">Mexico (+52)</option>
                                                            <option data-countryCode="FM" value="+691">Micronesia (+691)</option>
                                                            <option data-countryCode="MD" value="+373">Moldova (+373)</option>
                                                            <option data-countryCode="MC" value="+377">Monaco (+377)</option>
                                                            <option data-countryCode="MN" value="+976">Mongolia (+976)</option>
                                                            <option data-countryCode="MS" value="+1664">Montserrat (+1664)</option>
                                                            <option data-countryCode="MA" value="+212">Morocco (+212)</option>
                                                            <option data-countryCode="MZ" value="+258">Mozambique (+258)</option>
                                                            <option data-countryCode="MN" value="+95">Myanmar (+95)</option>
                                                            <option data-countryCode="NA" value="+264">Namibia (+264)</option>
                                                            <option data-countryCode="NR" value="+674">Nauru (+674)</option>
                                                            <option data-countryCode="NP" value="+977">Nepal (+977)</option>
                                                            <option data-countryCode="NL" value="+31">Netherlands (+31)</option>
                                                            <option data-countryCode="NC" value="+687">New Caledonia (+687)</option>
                                                            <option data-countryCode="NZ" value="+64">New Zealand (+64)</option>
                                                            <option data-countryCode="NI" value="+505">Nicaragua (+505)</option>
                                                            <option data-countryCode="NE" value="+227">Niger (+227)</option>
                                                            <option data-countryCode="NG" value="+234">Nigeria (+234)</option>
                                                            <option data-countryCode="NU" value="+683">Niue (+683)</option>
                                                            <option data-countryCode="NF" value="+672">Norfolk Islands (+672)</option>
                                                            <option data-countryCode="NP" value="+670">Northern Marianas (+670)</option>
                                                            <option data-countryCode="NO" value="+47">Norway (+47)</option>
                                                            <option data-countryCode="OM" value="+968">Oman (+968)</option>
                                                            <option data-countryCode="PK" value="+92">Pakistan (+92)</option>
                                                            <option data-countryCode="PW" value="+680">Palau (+680)</option>
                                                            <option data-countryCode="PA" value="+507">Panama (+507)</option>
                                                            <option data-countryCode="PG" value="+675">Papua New Guinea (+675)</option>
                                                            <option data-countryCode="PY" value="+595">Paraguay (+595)</option>
                                                            <option data-countryCode="PE" value="+51">Peru (+51)</option>
                                                            <option data-countryCode="PH" value="+63">Philippines (+63)</option>
                                                            <option data-countryCode="PL" value="+48">Poland (+48)</option>
                                                            <option data-countryCode="PT" value="+351">Portugal (+351)</option>
                                                            <option data-countryCode="PR" value="+1787">Puerto Rico (+1787)</option>
                                                            <option data-countryCode="QA" value="+974">Qatar (+974)</option>
                                                            <option data-countryCode="RE" value="+262">Reunion (+262)</option>
                                                            <option data-countryCode="RO" value="+40">Romania (+40)</option>
                                                            <option data-countryCode="RU" value="+7">Russia (+7)</option>
                                                            <option data-countryCode="RW" value="+250">Rwanda (+250)</option>
                                                            <option data-countryCode="SM" value="+378">San Marino (+378)</option>
                                                            <option data-countryCode="ST" value="+239">Sao Tome &amp; Principe (+239)</option>
                                                            <option data-countryCode="SA" value="+966">Saudi Arabia (+966)</option>
                                                            <option data-countryCode="SN" value="+221">Senegal (+221)</option>
                                                            <option data-countryCode="CS" value="+381">Serbia (+381)</option>
                                                            <option data-countryCode="SC" value="+248">Seychelles (+248)</option>
                                                            <option data-countryCode="SL" value="+232">Sierra Leone (+232)</option>
                                                            <option data-countryCode="SG" value="+65">Singapore (+65)</option>
                                                            <option data-countryCode="SK" value="+421">Slovak Republic (+421)</option>
                                                            <option data-countryCode="SI" value="+386">Slovenia (+386)</option>
                                                            <option data-countryCode="SB" value="+677">Solomon Islands (+677)</option>
                                                            <option data-countryCode="SO" value="+252">Somalia (+252)</option>
                                                            <option data-countryCode="ZA" value="+27">South Africa (+27)</option>
                                                            <option data-countryCode="ES" value="+34">Spain (+34)</option>
                                                            <option data-countryCode="LK" value="+94">Sri Lanka (+94)</option>
                                                            <option data-countryCode="SH" value="+290">St. Helena (+290)</option>
                                                            <option data-countryCode="KN" value="+1869">St. Kitts (+1869)</option>
                                                            <option data-countryCode="SC" value="+1758">St. Lucia (+1758)</option>
                                                            <option data-countryCode="SD" value="+249">Sudan (+249)</option>
                                                            <option data-countryCode="SR" value="+597">Suriname (+597)</option>
                                                            <option data-countryCode="SZ" value="+268">Swaziland (+268)</option>
                                                            <option data-countryCode="SE" value="+46">Sweden (+46)</option>
                                                            <option data-countryCode="CH" value="+41">Switzerland (+41)</option>
                                                            <option data-countryCode="SI" value="+963">Syria (+963)</option>
                                                            <option data-countryCode="TW" value="+886">Taiwan (+886)</option>
                                                            <option data-countryCode="TJ" value="+7">Tajikstan (+7)</option>
                                                            <option data-countryCode="TH" value="+66">Thailand (+66)</option>
                                                            <option data-countryCode="TG" value="+228">Togo (+228)</option>
                                                            <option data-countryCode="TO" value="+676">Tonga (+676)</option>
                                                            <option data-countryCode="TT" value="+1868">Trinidad &amp; Tobago (+1868)</option>
                                                            <option data-countryCode="TN" value="+216">Tunisia (+216)</option>
                                                            <option data-countryCode="TR" value="+90">Turkey (+90)</option>
                                                            <option data-countryCode="TM" value="+7">Turkmenistan (+7)</option>
                                                            <option data-countryCode="TM" value="+993">Turkmenistan (+993)</option>
                                                            <option data-countryCode="TC" value="+1649">Turks &amp; Caicos Islands (+1649)</option>
                                                            <option data-countryCode="TV" value="+688">Tuvalu (+688)</option>
                                                            <option data-countryCode="UG" value="+256">Uganda (+256)</option>
                                                            <option data-countryCode="GB" value="+44">UK (+44)</option> 
                                                            <option data-countryCode="UA" value="+380">Ukraine (+380)</option>
                                                            <option data-countryCode="AE" value="+971">United Arab Emirates (+971)</option>
                                                            <option data-countryCode="UY" value="+598">Uruguay (+598)</option>
                                                            <option data-countryCode="US" value="+1">USA (+1)</option> 
                                                            <option data-countryCode="UZ" value="+7">Uzbekistan (+7)</option>
                                                            <option data-countryCode="VU" value="+678">Vanuatu (+678)</option>
                                                            <option data-countryCode="VA" value="+379">Vatican City (+379)</option>
                                                            <option data-countryCode="VE" value="+58">Venezuela (+58)</option>
                                                            <option data-countryCode="VN" value="+84">Vietnam (+84)</option>
                                                            <option data-countryCode="VG" value="+84">Virgin Islands - British (+1284)</option>
                                                            <option data-countryCode="VI" value="+84">Virgin Islands - US (+1340)</option>
                                                            <option data-countryCode="WF" value="+681">Wallis &amp; Futuna (+681)</option>
                                                            <option data-countryCode="YE" value="+969">Yemen (North)(+969)</option>
                                                            <option data-countryCode="YE" value="+967">Yemen (South)(+967)</option>
                                                            <option data-countryCode="ZM" value="+260">Zambia (+260)</option>
                                                            <option data-countryCode="ZW" value="+263">Zimbabwe (+263)</option>
                                            </select>
                                            {formik.touched.country_code ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.country_code}</div>) : null}
                                    </div></div>
                            <div className="col-sm-6"><div className="form-group">
                            <label htmlFor>Phone</label>
                                <input type="text" name="phone" placeholder="Enter your Contact" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.contact} className="form-control" maxLength={11} required />
                                {formik.errors.phone && formik.touched.phone ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.phone}</div>) : null}
                              </div></div>
                            </div>
                            </div>
                      <div className="col-md-6 country_div">
                        <div className="form-group">
                          <label htmlFor="sel1">Country of Residence </label>
                          <select name="country" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.country} className="form-control" required>
                              <option>Choose Country</option>                  
                              <option data-countryCode="SD" value="Afghanistan">Afghanistan</option>
                              <option data-countryCode="SD" value="Albania">Albania</option>
                              <option data-countryCode="SD" value="Algeria">Algeria</option>
                              <option data-countryCode="SD" value="Andorra">Andorra</option>
                              <option data-countryCode="SD" value="Angola">Angola</option>
                              <option data-countryCode="SD" value="Antigua and Barbuda">Antigua and Barbuda</option>
                              <option data-countryCode="SD" value="Argentina">Argentina</option>
                              <option data-countryCode="SD" value="Armenia">Armenia</option>
                              <option data-countryCode="SD" value="Australia">Australia</option>
                              <option data-countryCode="SD" value="Austria">Austria</option>
                              <option data-countryCode="SD" value="Azerbaijan">Azerbaijan</option>
                              <option data-countryCode="SD" value="Bahamas">The Bahamas</option>
                              <option data-countryCode="SD" value="Bahrain">Bahrain</option>
                              <option data-countryCode="SD" value="Bangladesh">Bangladesh</option>
                              <option data-countryCode="SD" value="Barbados">Barbados</option>
                              <option data-countryCode="SD" value="Belarus">Belarus</option>
                              <option data-countryCode="SD" value="Belgium">Belgium</option>
                              <option data-countryCode="SD" value="Belize">Belize</option>
                              <option data-countryCode="SD" value="Benin">Benin</option>
                              <option data-countryCode="SD" value="Bhutan">Bhutan</option>
                              <option data-countryCode="SD" value="Bolivia">Bolivia</option>
                              <option data-countryCode="SD" value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                              <option data-countryCode="SD" value="Botswana">Botswana</option>
                              <option data-countryCode="SD" value="Brazil">Brazil</option>
                              <option data-countryCode="SD" value="Brunei">Brunei</option>
                              <option data-countryCode="SD" value="Bulgaria">Bulgaria</option>
                              <option data-countryCode="SD" value="Burkina Faso">Burkina Faso</option>
                              <option data-countryCode="SD" value="Burundi">Burundi</option>
                              <option data-countryCode="SD" value="Cambodia">Cambodia</option>
                              <option data-countryCode="SD" value="Cameroon">Cameroon</option>
                              <option data-countryCode="SD" value="Canada">Canada</option>
                              <option data-countryCode="SD" value="Cape Verde">Cape Verde</option>
                              <option data-countryCode="SD" value="Central African Republic">Central African Republic</option>
                              <option data-countryCode="SD" value="Chad">Chad</option>
                              <option data-countryCode="SD" value="Chile">Chile</option>
                              <option data-countryCode="SD" value="China">China</option>
                              <option data-countryCode="SD" value="Colombia">Colombia</option>
                              <option data-countryCode="SD" value="Comoros">Comoros</option>
                              <option data-countryCode="SD" value="Congo, Republic of the">Congo, Republic of the</option>
                              <option data-countryCode="SD" value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option>
                              <option data-countryCode="SD" value="Costa Rica">Costa Rica</option>
                              <option data-countryCode="SD" value="Cote d'Ivoire">Cote d'Ivoire</option>
                              <option data-countryCode="SD" value="Croatia">Croatia</option>
                              <option data-countryCode="SD" value="Cuba">Cuba</option>
                              <option data-countryCode="SD" value="Cyprus">Cyprus</option>
                              <option data-countryCode="SD" value="Czech Republic">Czech Republic</option>
                              <option data-countryCode="SD" value="Denmark">Denmark</option>
                              <option data-countryCode="SD" value="Djibouti">Djibouti</option>
                              <option data-countryCode="SD" value="Dominica">Dominica</option>
                              <option data-countryCode="SD" value="Dominican Republic">Dominican Republic</option>
                              <option data-countryCode="SD" value="East Timor (Timor-Leste)">East Timor (Timor-Leste)</option>
                              <option data-countryCode="SD" value="Ecuador">Ecuador</option>
                              <option data-countryCode="SD" value="Egypt">Egypt</option>
                              <option data-countryCode="SD" value="El Salvador">El Salvador</option>
                              <option data-countryCode="SD" value="Equatorial Guinea">Equatorial Guinea</option>
                              <option data-countryCode="SD" value="The Gambia">The Gambia</option>
                              <option data-countryCode="SD" value="Georgia">Georgia</option>
                              <option data-countryCode="SD" value="Germany">Germany</option>
                              <option data-countryCode="SD" value="Ghana">Ghana</option>
                              <option data-countryCode="GI" value="Gibraltar">Gibraltar</option>
                              <option data-countryCode="GR" value="Greece">Greece</option>
                              <option data-countryCode="GL" value="Greenland">Greenland</option>
                              <option data-countryCode="GD" value="Grenada">Grenada</option>
                              <option data-countryCode="GP" value="Guadeloupe">Guadeloupe</option>
                              <option data-countryCode="SD" value="Guinea-Bissau">Guinea-Bissau</option>
                              <option data-countryCode="SD" value="Guyana">Guyana</option>
                              <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                              <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                              <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                              <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                              <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                              <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                              <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                              <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                              <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                              <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                              <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                              <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                              <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                              <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                              <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                              <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                              <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                              <option data-countryCode="SD" value="Korea, North">Korea, North</option>
                              <option data-countryCode="SD" value="Korea, South">Korea, South</option>
                              <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                              <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                              <option data-countryCode="SD" value="Kyrgyzstan">Kyrgyzstan</option>
                              <option data-countryCode="SD" value="Laos">Laos</option>
                              <option data-countryCode="SD" value="Latvia">Latvia</option>
                              <option data-countryCode="SD" value="Lebanon">Lebanon</option>
                              <option data-countryCode="SD" value="Lesotho">Lesotho</option>
                              <option data-countryCode="SD" value="Liberia">Liberia</option>
                              <option data-countryCode="SD" value="Libya">Libya</option>
                              <option data-countryCode="SD" value="Liechtenstein">Liechtenstein</option>
                              <option data-countryCode="SD" value="Lithuania">Lithuania</option>
                              <option data-countryCode="SD" value="Luxembourg">Luxembourg</option>
                              <option data-countryCode="SD" value="Macedonia">Macedonia</option>
                              <option data-countryCode="SD" value="Madagascar">Madagascar</option>
                              <option data-countryCode="SD" value="Malawi">Malawi</option>
                              <option data-countryCode="SD" value="Malaysia">Malaysia</option>
                              <option data-countryCode="SD" value="Maldives">Maldives</option>
                              <option data-countryCode="SD" value="Mali">Mali</option>
                              <option data-countryCode="SD" value="Malta">Malta</option>
                              <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                              <option data-countryCode="SD" value="Mauritania">Mauritania</option>
                              <option data-countryCode="SD" value="Mauritius">Mauritius</option>
                              <option data-countryCode="SD" value="Mexico">Mexico</option>
                              <option data-countryCode="SD" value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                              <option data-countryCode="SD" value="Moldova">Moldova</option>
                              <option data-countryCode="SD" value="Monaco">Monaco</option>
                              <option data-countryCode="SD" value="Mongolia">Mongolia</option>
                              <option data-countryCode="SD" value="Montenegro">Montenegro</option>
                              <option data-countryCode="SD" value="Morocco">Morocco</option>
                              <option data-countryCode="SD" value="Mozambique">Mozambique</option>
                              <option data-countryCode="SD" value="Myanmar (Burma)">Myanmar (Burma)</option>
                              <option data-countryCode="SD" value="Namibia">Namibia</option>
                              <option data-countryCode="SD" value="Nauru">Nauru</option>
                              <option data-countryCode="SD" value="Nepal">Nepal</option>
                              <option data-countryCode="SD" value="Netherlands">Netherlands</option>
                              <option data-countryCode="SD" value="New Zealand">New Zealand</option>
                              <option data-countryCode="SD" value="Nicaragua">Nicaragua</option>
                              <option data-countryCode="SD" value="Niger">Niger</option>
                              <option data-countryCode="SD" value="Nigeria">Nigeria</option>
                              <option data-countryCode="SD" value="Norway">Norway</option>
                              <option data-countryCode="SD" value="Oman">Oman</option>
                              <option data-countryCode="SD" value="Pakistan">Pakistan</option>
                              <option data-countryCode="SD" value="Palau">Palau</option>
                              <option data-countryCode="SD" value="Panama">Panama</option>
                              <option data-countryCode="SD" value="Papua New Guinea">Papua New Guinea</option>
                              <option data-countryCode="SD" value="Paraguay">Paraguay</option>
                              <option data-countryCode="SD" value="Peru">Peru</option>
                              <option data-countryCode="SD" value="Philippines">Philippines</option>
                              <option data-countryCode="SD" value="Poland">Poland</option>
                              <option data-countryCode="SD" value="Portugal">Portugal</option>
                              <option data-countryCode="SD" value="Qatar">Qatar</option>
                              <option data-countryCode="SD" value="Romania">Romania</option>
                              <option data-countryCode="SD" value="Russia">Russia</option>
                              <option data-countryCode="SD" value="Rwanda">Rwanda</option>
                              <option data-countryCode="SD" value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                              <option data-countryCode="SD" value="Saint Lucia">Saint Lucia</option>
                              <option data-countryCode="SD" value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                              <option data-countryCode="SD" value="Samoa">Samoa</option>
                              <option data-countryCode="SD" value="San Marino">San Marino</option>
                              <option data-countryCode="SD" value="Sao Tome and Principe">Sao Tome and Principe</option>
                              <option data-countryCode="SD" value="Saudi Arabia">Saudi Arabia</option>
                              <option data-countryCode="SD" value="Senegal">Senegal</option>
                              <option data-countryCode="SD" value="Serbia">Serbia</option>
                              <option data-countryCode="SD" value="Seychelles">Seychelles</option>
                              <option data-countryCode="SD" value="Sierra Leone">Sierra Leone</option>
                              <option data-countryCode="SD" value="Singapore">Singapore</option>
                              <option data-countryCode="SD" value="Slovakia">Slovakia</option>
                              <option data-countryCode="SD" value="Slovenia">Slovenia</option>
                              <option data-countryCode="SD" value="Solomon Islands">Solomon Islands</option>
                              <option data-countryCode="SD" value="Somalia">Somalia</option>
                              <option data-countryCode="SD" value="South Africa">South Africa</option>
                              <option data-countryCode="SD" value="South Sudan">South Sudan</option>
                              <option data-countryCode="SD" value="Spain">Spain</option>
                              <option data-countryCode="SD" value="Sri Lanka">Sri Lanka</option>
                              <option data-countryCode="SD" value="Sudan">Sudan</option>
                              <option data-countryCode="SD" value="Suriname">Suriname</option>
                              <option data-countryCode="SD" value="Swaziland">Swaziland</option>
                              <option data-countryCode="SD" value="Sweden">Sweden</option>
                              <option data-countryCode="SD" value="Switzerland">Switzerland</option>
                              <option data-countryCode="SD" value="Syria">Syria</option>
                              <option data-countryCode="SD" value="Taiwan">Taiwan</option>
                              <option data-countryCode="SD" value="Tajikistan">Tajikistan</option>
                              <option data-countryCode="SD" value="Tanzania">Tanzania</option>
                              <option data-countryCode="SD" value="Thailand">Thailand</option>
                              <option data-countryCode="SD" value="Togo">Togo</option>
                              <option data-countryCode="SD" value="Tonga">Tonga</option>
                              <option data-countryCode="SD" value="Trinidad and Tobago">Trinidad and Tobago</option>
                              <option data-countryCode="SD" value="Tunisia">Tunisia</option>
                              <option data-countryCode="SD" value="Turkey">Turkey</option>
                              <option data-countryCode="SD" value="Turkmenistan">Turkmenistan</option>
                              <option data-countryCode="SD" value="Tuvalu">Tuvalu</option>
                              <option data-countryCode="SD" value="Uganda">Uganda</option>
                              <option data-countryCode="SD" value="Ukraine">Ukraine</option>
                              <option data-countryCode="SD" value="uae">United Arab Emirates</option>
                              <option data-countryCode="SD" value="uk">United Kingdom</option>
                              <option data-countryCode="SD" value="United States of America">United States of America</option>
                              <option data-countryCode="SD" value="Uruguay">Uruguay</option>
                              <option data-countryCode="SD" value="Uzbekistan">Uzbekistan</option>
                              <option data-countryCode="SD" value="Vanuatu">Vanuatu</option>
                              <option data-countryCode="SD" value="Vatican City (Holy See)">Vatican City (Holy See)</option>
                              <option data-countryCode="SD" value="Venezuela">Venezuela</option>
                              <option data-countryCode="SD" value="Vietnam">Vietnam</option>
                              <option data-countryCode="SD" value="Yemen">Yemen</option>
                              <option data-countryCode="SD" value="Zambia">Zambia</option>
                              <option data-countryCode="SD" value="Zimbabwe">Zimbabwe</option>
          </select>
          {formik.touched.country ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.country}</div>) : null}
                        </div>
                      </div>
                      <div className="col-md-6 country_div">
                        <div className="form-group">
                          <label htmlFor>Age Group</label>
                          <select name="ageGroup"  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.ageGroup} id className="form-control" required>
                            <option>Choose Age Group</option>
                            <option >3-6</option>
                            <option >7-11</option>
                            <option >12-15</option>
                            <option >16-20</option>
                            <option >21-35</option>
                            <option >35+</option>
                          </select>
                          {formik.touched.ageGroup ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.ageGroup}</div>) : null}
                        </div>
                      </div>
                      <div className="col-md-6 country_div">
                        <div className="form-group" >
                          <label htmlFor>Gender*</label>
                          <select name="gender" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.gender} id className="form-control" required >
                            <option >Choose Gender</option>
                            <option >Male</option>
                            <option >Female </option>
                            <option >Unspecify</option>
                          </select>
                          {formik.touched.gender ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.gender}</div>) : null}
                        </div>
                        </div>
                      <div className="col-md-6">
                        <label htmlFor>Date of Birth*</label>
                        <input type="date" name="dob" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.dob} className="form-control" required  />
                        {formik.touched.dob ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.dob}</div>) : null}
                      </div>
                    </div>
                    <hr />
                    <a href data-toggle="modal" data-target="#exampleModal">
                      Result?</a>
                      &nbsp;&nbsp;
                    <a href data-toggle="modal" data-target="#placementLogin">
                      Already Registered?</a>
                    <center>
                     
                      <button type="submit" className="btn btn-dark"  style={{marginTop: '10px'}}>
                        Proceed to test
                      </button>
    
  
                    </center>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Check Placement Result</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body pt-5 mt-5">
                <div className="">
                  <form action="{{url('placement-result')}}" method="post">
                    <div className="form-group">
                      <label htmlFor>Email Address:</label>
                      <input type="email" name="email" className="form-control" required />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-dark" >Get Info</button>
                    </div>
                  </form>
                </div>
                <div className="col-md-2" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-dark" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        {/* Login Registration Page Area End Here */} 
        {/* Modal */}
        <div className="modal fade" id="placementLogin" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id>Placement Test</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body pt-5 mt-5">
                <div>
                  <form action="{{url('placement-login')}}" method="post">
                    <div className="form-group">
                      <label htmlFor>Email Address:</label>
                      <input type="email" name="email" className="form-control" required />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-dark" >Enter</button>
                    </div>
                  </form>
                </div>
                <div className="col-md-2" />
              </div>
              <div className="modal-footer">
              </div>
            </div>
          </div>
        </div>
        {/* Login Registration Page Area End Here */}
      </div> 
        </div>
    )
}

export default PlacementTest
