/// <reference types="jquery" />

interface JQuery {
	telerik_ReportViewer(config: IPrintConfig): void;
}

interface IReportViewerConfig {
	serviceUrl: string;
	templateUrl: string;
	reportSource: IReportSource;
}

interface IReportSource {
	report: string;
	parameters: Array<any>;
}
