using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Codaxy.Dextop.Data;

namespace Mvc.App.model
{
    [DextopModel]
    [DextopGrid]
    class User
    {
        public int Id { get; set; }

        [DextopGridColumn(width = 50, text = "Active")]
        public bool Active { get; set; }

        [DextopGridColumn(width = 100)]
        public String Username { get; set; }

        [DextopGridColumn(width = 150, text = "Display Name")]
        public String DisplayName { get; set; }

        [DextopGridColumn(width = 150)]
        public String EMail { get; set; }
    }
}