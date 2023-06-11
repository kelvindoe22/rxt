export default function StudentInfoEntry() {
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
            Student Info Entry
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
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Parent First name" aria-label="First name"/>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Parent Last name" aria-label="Last name"/>
                    </div>
                </div> 
            </div>
            <div class="mb-3">
                <div class="col">
                    <input type="date" class="form-control" aria-label="Date"/>
                </div>
            </div>
            <div class="mb-3">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Address" aria-label="Address"/>
                </div>
            </div>
            <div class="mb-3">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Telephone Number" aria-label="number"/>
                </div>
            </div>
           
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

    </div>
</div>
}