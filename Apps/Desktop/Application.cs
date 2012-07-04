using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Codaxy.Dextop;
using Codaxy.Dextop.Modules;

namespace Desktop
{
    public class Application : DextopApplication
    {
        protected override void RegisterModules()
        {
#if DEBUG
            //RegisterModule("client/lib/ext", new DextopExtJSModule() { Debug = true });
            RegisterModule("http://dextop.codaxy.com/ext/extjs-4.1.1-rc2", new DextopExtJSModule
            {                
                UsingExternalResources = true
            });

            RegisterModule("http://dextop.codaxy.com/ext/extjs-4.1.1-rc2/examples/desktop", new ExtDesktopModule 
            {
                UsingExternalResources = true
            });
#else
            RegisterModule("client/lib/ext", new DextopExtJSModule());
            RegisterModule("client/lib/ext/examples/desktop", new ExtDesktopModule());
#endif
            RegisterModule("client/lib/dextop", new DextopCoreModule());
            RegisterModule("", new AppModule());            
        }

        protected override void OnModulesInitialized()
        {
            base.OnModulesInitialized();
#if !DEBUG
            OptimizeModules("client/js/cache");
#endif
        }
    }
}