
Ext.onReady(function(){
	
	
	Ext.create('Ext.data.Store', {
		storeId: 'componentStore',
		fields:[ 'component', 'tickets', 'testcases', 'bugs'],
		data: [
			{ component: 'IMT', tickets: '321', testcases: '22', bugs: '8' },
			{ component: 'BSL', tickets: '201', testcases: '34', bugs: '10' },
			{ component: 'Tagging', tickets: '234', testcases: '12', bugs: '3' },
			{ component: 'Feasibility', tickets: '122', testcases: '45', bugs: '9' }
		]
	});
	
	Ext.create('Ext.data.Store', {
		storeId: 'testStore',
		fields:[ 'component', 'testcase', 'complexity', 'priority', 'comments'],
		data: [
			{ testcase: 'Check grid sort',  complexity: '1', priority: 'high', comments: 'Sort is working pretty good' },
			{ testcase: 'Check grid order', complexity: '2', priority: 'medium', comments: 'order does not work at all' },
			{ testcase: 'Check Grid pagination', complexity: '3', priority: 'high', comments: 'works good' },
			{ testcase: 'Check grid filters', complexity: '4', priority: 'low', comments: 'Numeric filter does not work' }
		]
	});

	var componentGrid = Ext.create('Ext.grid.Panel', {
		title: 'Component',
		store: Ext.data.StoreManager.lookup('componentStore'),
		columns: [
			{ text: 'Component', dataIndex: 'component', width: 200, renderer:
					function(a, b, c) {
						return '<a href="javaScript:void(0)" >' + a + '</a>';
						
					}
			},
			{ text: 'N. Tickets', dataIndex: 'tickets', align: 'right' },
			{ text: 'N. Test Cases', dataIndex: 'testcases', width: 150, align: 'right' },
			{ text: 'N. Bugs', dataIndex: 'bugs', align: 'right' }
		],
		height: 250,
		width: 600,
		listeners: {
			cellclick: function(a, b, c, d){
				if (c == 0) {
					this.setVisible(false);
					testCasesGrid.setVisible(true);
					backButton.setVisible(true);
				}
			}
		}
	});
	
	var testCasesGrid = Ext.create('Ext.grid.Panel', {
		title: 'Test Cases',
		store: Ext.data.StoreManager.lookup('testStore'),
		columns: [
			/*{ text: 'Component', dataIndex: 'component', width: 200, renderer:
					function(a, b, c) {
						return '<a href="javaScript:void(0)" >' + a + '</a>';
						
					}
			},*/
			{ text: 'Component', dataIndex: 'component', align: 'right' },
			{ text: 'Test Case', dataIndex: 'testcase', align: 'left', width: 250 },
			{ text: 'Complexity', dataIndex: 'complexity', width: 100, align: 'right' },
			{ text: 'Priority', dataIndex: 'priority', align: 'left' },
			{ text: 'Comments', dataIndex: 'comments', align: 'left', width: 250 }
		],
		height: 250,
		//margin: '20 0 0 0',
		width: 820,
		listeners: {
			cellclick: function(a, b, c, d){
				if (c == 0)
					alert(d.get("component"));
			}
		}
	});
	
	var ticketGrid = Ext.create('Ext.grid.Panel', {
		title: 'Ticket',
		store: Ext.data.StoreManager.lookup('testStore'),
		columns: [
			{ text: 'ID', dataIndex: 'component', align: 'right', width: 50 },
			{ text: 'Summary', dataIndex: 'testcase', align: 'left', width: 250 },
			{ text: 'Estimated', dataIndex: 'complexity', width: 100, align: 'right' },
			{ text: 'Worked', dataIndex: 'priority', align: 'left' },
			{ text: 'Status', dataIndex: 'comments', align: 'left', width: 150 },
			{ text: 'Assignee', dataIndex: 'comments', align: 'left', width: 150 }
		],
		height: 250,
		//margin: '20 0 0 0',
		width: 820,
		listeners: {
			cellclick: function(a, b, c, d){
				if (c == 0)
					alert(d.get("component"));
			}
		}
	});
	
	var regressionGrid = Ext.create('Ext.grid.Panel', {
		title: 'Regression',
		store: Ext.data.StoreManager.lookup('testStore'),
		columns: [
			{ text: 'Test Case', dataIndex: 'testcase', align: 'left', width: 250 },
			{ text: 'Status', dataIndex: 'complexity', width: 100, align: 'right' },
			{ text: 'Comment', dataIndex: 'priority', align: 'left' },
		],
		height: 250,
		//margin: '20 0 0 0',
		width: 820,
		listeners: {
			cellclick: function(a, b, c, d){
				if (c == 0)
					alert(d.get("component"));
			}
		}
	});
	
	
	/*
	var backButton = Ext.create('Ext.Button', {
		text    : 'Back To Overview',
		handler : function() {
					componentGrid.setVisible(true);
					testCasesGrid.setVisible(false);
					backButton.setVisible(false);
		},
		margin: '20 0 0 0',
		hidden: true
	});
	*/
	
	var tabPanel = Ext.create('Ext.tab.Panel', {
		width: 820,
		height: 350,
		margin: '20 0 0 0',
		items: [ testCasesGrid, ticketGrid, regressionGrid]
	});
	
	 Ext.create('Ext.container.Viewport', {
		 //layout: 'fit', // full the viewport with the tab panel

		 items: [componentGrid, tabPanel]
	  });
 });
