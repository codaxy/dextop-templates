using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Codaxy.Dextop;

namespace Mvc
{
    public class AppModule : DextopModule
    {
        protected override void InitNamespaces()
        {
            RegisterNamespaceMapping("Mvc.App.model*", "Mvc*");
            RegisterNamespaceMapping("Mvc.App*", "Mvc*");            
            RegisterNamespaceMapping("Mvc*", "Mvc");
        }

        protected override void InitResources()
        {
            RegisterJs("sample", "", 
                "client/js/generated/",
                "App/controllers/",
                "App/views/*/",
                "App/*/");

            RegisterCss("client/css/site.css");
        }

        public override string ModuleName
        {
            get { return "sample"; }
        }

        protected override void RegisterAssemblyPreprocessors(Dictionary<string, IDextopAssemblyPreprocessor> preprocessors)
        {
            RegisterStandardAssemblyPreprocessors("client/js/generated", preprocessors);
        }
    }
}