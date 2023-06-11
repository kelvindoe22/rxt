export default function Login() {
    return <div className="d-flex justify-content-center" style={{ width : '100%' }}>
    <div className="d-flex justify-content-center flex-column"
        style={ {
            width: 'fit-content'
        } }
    >
        <h1 className="mb-9" style={ {
            textAlign: "center",
            marginBottom: "0.5em"
        }}>
            Log In
        </h1>
        <form>
            <div class="mb-3">
                <div class="col">
                    <input type="text" class="form-control" placeholder="User ID" aria-label="ID"/>
                </div>
            </div>
            <div class="mb-3">
                <div class="col">
                    <input type="password" class="form-control" placeholder="Password" aria-label="Student Level"/>
                </div>
            </div>
            <div style={ { marginBottom: '0.9rem' }}>     
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">Staff</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label class="form-check-label" for="inlineRadio2">Student</label>
                </div>
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

    </div>
</div>
}