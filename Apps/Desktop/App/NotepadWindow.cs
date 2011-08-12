using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Codaxy.Dextop.Remoting;
using Codaxy.Dextop;

namespace Desktop.App
{
	public class NotepadWindow : DextopWindow
	{
        [DextopRemotableConstructor(alias="notepad")]
        public NotepadWindow() { }

		[DextopRemotable]
		public String UploadContent(String content)
		{
			return String.Format("HTML content of length {0:#,#0} has been uploaded.", content.Length);
		}
	}
}