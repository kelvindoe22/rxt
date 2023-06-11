export default function Dashboard() {
    return <div className="d-flex justify-content-center mr-2" style={
            {
                marginRight: '5em', 
                marginLeft: '5em' 
            }
    }
        >
    <div className="d-flex justify-content-center flex-column">
        <h1 className="mb-9" style={ {
            textAlign: "center",
            marginBottom: "0.5em"
        }}>
            Dashboard
        </h1>
        <div class="d-flex justify-content-between">
            <p className="fs-3">Welcome, Darren</p>
            <a href="/#" class="text-decoration-none fw-bold">Logout</a>
        </div>
        <p className="fs-5">Overview</p>
        <div className="d-flex justify-content-between flex-wrap">
            <div class="d-flex flex-column">
                <div class="card" style={{width: '18rem', marginRight: '0.5em'}}>
                    <div class="card-body bg-success p-2 text-white text-center">
                        <div class="d-flex justify-content-between flex-column" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="190" height="100" fill="currentColor" class="bi bi-list-ol" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
                                <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <a href="/#" class="fs-6 text-decoration-none fw-bold text-center">Course Schedule</a>
            </div>
            <div class="d-flex flex-column">
                <div class="card" style={{width: '18rem', marginRight: '0.5em', marginBottom : '0.5em'}}>
                    <div class="card-body bg-success p-2 text-white text-center">
                        <div class="d-flex justify-content-between flex-column" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="190" height="100" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <a href="/#" class="fs-6 text-decoration-none fw-bold text-center">Grades and Progress</a>
            </div>
            <div class="d-flex flex-column">
                <div class="card" style={{width: '18rem', marginRight: '0.5em', marginBottom : '0.5em'}}>
                    <div class="card-body bg-success p-2 text-white text-center">
                        <div class="d-flex justify-content-between flex-column" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="190" height="100" fill="currentColor" class="bi bi-megaphone" viewBox="0 0 16 16">
                                <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <a href="/#" class="fs-6 text-decoration-none fw-bold text-center">Announcements and Notifications</a>
            </div>
        </div>

    </div>
</div>

}