using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Codaxy.Dextop;
using Codaxy.Dextop.Remoting;
using Codaxy.Dextop.Data;
using Mvc.App.model;

namespace Mvc.App.views.user
{
    public class Panel : DextopPanel
    {
        [DextopRemotableConstructor(alias = "users")]
        public Panel()
        {
            
        }

        public override void InitRemotable(DextopRemote remote, DextopConfig config)
        {
            base.InitRemotable(remote, config);
            Remote.AddStore("model", new Codaxy.Dextop.Data.DextopMemoryDataProxy<User, int>(a=>a.Id, (id) => { return ++id; }));            
        }
    }
}