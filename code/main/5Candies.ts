///<reference path="StatusBarResource.ts"/>

class Candies extends StatusBarResource{
    // Constructor
    constructor(game: Game, savingPrefix: string){
        super(game, savingPrefix);
    }
    
    // Public methods
    public getCurrentAsString(totalSize: number = 10): string{
        var n: number = this.getCurrent();
        var size: number = totalSize;
        
        var base: string = "";
        var prefix: string = "";
        var suffix: string = "";
        var comment: string = "";
        
        // We set the base or return right now in some special cases
        if(n < 0)
            return "What, negative candies?!";
        else if(n == 1)
            return "You have 1 candy";
        else{
            if(n == 1337)
                base = "leet";
            else
                base = Algo.numberToStringButNicely(n);
        }
        
        // How much space do we still have ?
        size = totalSize - base.length;
        
        // We set the suffix
        if(size >= 8){
            suffix = " candies";
            
            // We add a prefix
                // How much space do we still have ?
                size = totalSize - base.length - suffix.length;
                
                // We set the prefix
                if(size >= 9) prefix = "You have ";
                else if(size >= 3) prefix = "-> ";
        }
        else if(size >= 4) suffix = " cnd";
        else if(size >= 2) suffix = " c";
        
        // How much space do we still have ?
        size = totalSize - base.length - prefix.length - suffix.length;
        
        // We possibly set a comment
        if(n == 42 && size >= 4) comment = " \\o/";
        else if((n == 65535 || n == 314159) && size >= 1) comment = "!";
        
        return prefix + base + suffix + comment;
    }
}
