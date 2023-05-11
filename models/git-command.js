class GitCommand {
    constructor(working_directory){
        this.working_directory = working_directory;
    }
    //Command: git init 
    init(){
        this.staging = [];
        this.local_repository = [];
        return "Initialized as empty Git repository.";
    }

    //Command: git status
    /*
    status(){        
        /**
            Create logic here and run unit testing.
        **
            let modified_files = this.working_directory.new_changes;
            let log = "";
            if (Object.keys(modified_files).length > 0) {
                log += "You have " + Object.keys(modified_files).length + " change/s.";
                for (let i = 0; i < Object.keys(modified_files).length; i++) {
                    log += Object.keys(modified_files)[i] + "";
                }
            } else {
                log += "You have 0 change/s.\n";
            }
            console.log(log)
            return log
    }
    */

    //Command: git add <filename/file directory/wildcard> 
    add(path_file){
        let modified_files = this.working_directory.new_changes;
        
        if(modified_files[path_file]){
            this.staging.push(modified_files[path_file]);
            delete modified_files[path_file];
        }
    }

    //Command: git commit -m "<message>"
    commit(message){
        if(this.staging.length > 0){
            this.local_repository.push({ "message": message, "files": this.staging });
            this.staging = [];
            return "Done committing to local repository.";
        }
        return "Nothing to commit.";
    }

    //Command: git push
    push(){   
        if(this.local_repository.length > 0){
            return "Done pushing to remote repository.";
        } 
        else {
            return "Nothing to push. No committed file found.";
        }     
    }
}


module.exports = GitCommand;
