using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Codaxy.Dextop.Data;
using Codaxy.Dextop;
using Codaxy.Dextop.Remoting;

namespace Desktop.App
{
	public class GridWindow : DextopWindow
	{
        [DextopRemotableConstructor(alias = "grid")]
        public GridWindow() {}

		public override void InitRemotable(DextopRemote remote, DextopConfig config)
		{
			base.InitRemotable(remote, config);
			var crud = new DextopMemoryDataProxy<Model, int>(a => a.Id, (lastId) => { return ++lastId; }) { 
				 Paging = true
			};
			Remote.AddStore("model", crud);
		}

		[DextopGrid]
		[DextopModel]
		class Model
		{
			[DextopModelId()]
			public int Id { get; set; }

			[DextopGridColumn(flex = 1)]
			public String FirstName { get; set; }

			[DextopGridColumn(flex = 1)]
			public String LastName { get; set; }

			[DextopGridColumn(flex=1)]
			public String CompanyName { get; set; }
		}
	}
}