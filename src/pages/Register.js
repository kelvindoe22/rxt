export default function Register() {
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
                Student Registration
            </h1>
            <form>
                <div class="mb-3">
                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
                        </div>
                    </div> 
                </div>
                <div class="mb-3">
                    <div class="col">
                        <input type="email" class="form-control" placeholder="Student Email" aria-label="Email"/>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Student Level" aria-label="Student Level"/>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="col">
                        <select class="form-select" aria-label="Select Department">
                            <option selected>Select Department</option>
                            <option value="1">Computer</option>
                            <option value="2">Food</option>
                            <option value="3">Material</option>
                            <option value="4">Biomedical</option>
                            <option value="5">Agricultural</option>
                        </select>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="col">
                        <select class="form-select" aria-label="Select Department">
                            <option selected>Gender</option>
                            <option value="1">M</option>
                            <option value="2">F</option>
                        </select>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="col">
                        <input type="password" class="form-control" placeholder="Password" aria-label="Student Level"/>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    </div>
    
}