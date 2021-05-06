import React, { useState, useEffect } from 'react'
// import CryptoJS from 'crypto-js'

/*global chrome*/

function Profiles() {
    const [saved, setSaved] = useState(false)

    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address1: '',
        address2: '',
        city: '',
        country: '',
        province: '',
        postalCode: '',
        cardNumber: '',
        expiration: '',
        securityCode: '',
        cardType: ''
    })

    useEffect(() => {
        chrome.storage.local.get(['profile'], function(result) {
            // try{
            //     let profileVal = CryptoJS.AES.decrypt(result.profile, 'shyboy123')
            //     profileVal = JSON.parse(profileVal.toString(CryptoJS.enc.Utf8))
            //     setProfile(profileVal)
            // } catch(e) {
            //     console.log('USEEFFECT', e)
            // }
            setProfile(result.profile)
        })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        // let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(profile), 'shyboy123').toString()
        // chrome.storage.local.set({ profile: ciphertext })
        // console.log('HANDLESUBMIT', ciphertext)
        chrome.storage.local.set({ profile })
        setSaved(true)
    }

    const editProfile = (e, value) => {
        let oldProfile = { ...profile }
        oldProfile[value] = e.target.value
        setProfile(oldProfile)
        setSaved(false)
    }

    return (
        <div className="profiles">
            <form onSubmit={handleSubmit}>
                <div className="form-input short">
                    <label>First Name</label>
                    <input autoComplete="nahhhh" placeholder="John" value={profile ? profile.firstName: ''}
                        onChange={e => editProfile(e, "firstName")} />
                </div>
                <div className="form-input short">
                    <label>Last Name</label>
                    <input autoComplete="nahhhh" placeholder="Smith" value={profile ? profile.lastName: ''}
                        onChange={e => editProfile(e, "lastName")} />
                </div>
                <div className="form-input short">
                    <label>Phone</label>
                    <input autoComplete="nahhhh" placeholder="1112223333" value={profile ? profile.phone: ''}
                        onChange={e => editProfile(e, "phone")} />
                </div>
                <div className="form-input long">
                    <label>Email</label>
                    <input autoComplete="nahhhh" placeholder="user@gmail.com" value={profile ? profile.email: ''}
                        onChange={e => editProfile(e, "email")} />
                </div>
                <div className="form-input medium">
                    <label>Address 1</label>
                    <input autoComplete="nahhhh" placeholder="1 Main Street" value={profile ? profile.address1: ''}
                        onChange={e => editProfile(e, "address1")} />
                </div>
                <div className="form-input short">
                    <label>Address 2</label>
                    <input autoComplete="nahhhh" placeholder="Unit 1" value={profile ? profile.address2: ''}
                        onChange={e => editProfile(e, "address2")} />
                </div>
                <div className="form-input medium">
                    <label>City</label>
                    <input autoComplete="nahhhh" placeholder="Toronto" value={profile ? profile.city: ''}
                        onChange={e => editProfile(e, "city")} />
                </div>
                <div className="form-input medium">
                    <label>Country</label>
                    <input autoComplete="nahhhh" placeholder="United States" value={profile ? profile.country: ''}
                        onChange={e => editProfile(e, "country")} />
                </div>
                <div className="form-input short">
                    <label>State/Province</label>
                    <input autoComplete="nahhhh" placeholder="NY" value={profile ? profile.province: ''}
                        onChange={e => editProfile(e, "province")} />
                </div>
                <div className="form-input short">
                    <label>Zip Code</label>
                    <input autoComplete="nahhhh" placeholder="12345" value={profile ? profile.postalCode: ''}
                        onChange={e => editProfile(e, "postalCode")} />
                </div>
                <div className="form-input long">
                    <label>Card Number</label>
                    <input autoComplete="nahhhh" placeholder="1111222233334444" value={profile ? profile.cardNumber: ''}
                        onChange={e => editProfile(e, "cardNumber")} />
                </div>
                <div className="form-input short">
                    <label>Expiration</label>
                    <input autoComplete="nahhhh" placeholder="12/25" value={profile ? profile.expiration: ''}
                        onChange={e => editProfile(e, "expiration")} />
                </div>
                <div className="form-input short">
                    <label>Security Code</label>
                    <input autoComplete="nahhhh" placeholder="123" value={profile ? profile.securityCode: ''}
                        onChange={e => editProfile(e, "securityCode")} />
                </div>
                <div className="form-input medium">
                    <label>Card Type</label>
                    <input autoComplete="nahhhh" placeholder="MasterCard" value={profile ? profile.cardType: ''}
                        onChange={e => editProfile(e, "cardType")} />
                </div>
                <div className="form-input medium">
                    <button className="form-submit" type="submit" value="submit">{saved ? "Profile Saved!" : "Save Profile"}</button>
                </div>
            </form>
        </div>

    );
  }
  
  export default Profiles;