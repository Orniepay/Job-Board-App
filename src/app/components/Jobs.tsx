import JobRow from "./JobRow";

export default function Job(){
    return (
        <>
            <div className="bg-slate-200 py-6 rounded-3xl">
                <div className="container">
                    <h2 className="font-bold mb-4 text-xl">Recent Jobs</h2>
                    <div className="flex flex-col gap-4">
                        <JobRow />
                        <JobRow />
                        <JobRow />
                        <JobRow />
                        <JobRow />
                    </div>
                </div>
            </div>
        </>
    );
}